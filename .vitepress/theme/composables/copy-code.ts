import { inBrowser } from 'vitepress'

export function useCopyCode(ppp: Object) {
  if (inBrowser)
    document
    .querySelectorAll<HTMLElement>(
        '.languages-box>.copy'
    )
    .forEach(handleElement)
}

async function copyToClipboard(text: string) {
  try {
    return navigator.clipboard.writeText(text)
  } catch {
    const element = document.createElement('textarea')
    const previouslyFocusedElement = document.activeElement

    element.value = text

    // Prevent keyboard from showing on mobile
    element.setAttribute('readonly', '')

    element.style.contain = 'strict'
    element.style.position = 'absolute'
    element.style.left = '-9999px'
    element.style.fontSize = '12pt' // Prevent zooming on iOS

    const selection = document.getSelection()
    const originalRange = selection
      ? selection.rangeCount > 0 && selection.getRangeAt(0)
      : null

    document.body.appendChild(element)
    element.select()

    // Explicit selection workaround for iOS
    element.selectionStart = 0
    element.selectionEnd = text.length

    document.execCommand('copy')
    document.body.removeChild(element)

    if (originalRange) {
      selection!.removeAllRanges() // originalRange can't be truthy when selection is falsy
      selection!.addRange(originalRange)
    }

    // Get the focus back on the previously focused element, if any
    if (previouslyFocusedElement) {
      ;(previouslyFocusedElement as HTMLElement).focus()
    }
  }
}

function handleElement(el: HTMLElement) {
  el.onclick = () => {
    const parent = <HTMLElement>el.nextElementSibling

    if (!parent) return

    const isShell =
      parent.classList.contains('language-sh') ||
      parent.classList.contains('language-bash')

    let { innerText: text = '' } = parent

    if (isShell) {
      text = text.replace(/^ *\$ /gm, '')
    }

    copyToClipboard(text).then(() => {
      el.classList.add('copied')
      setTimeout(() => {
        el.classList.remove('copied')
      }, 3000)
    })
  }
}
