document.getElementById('refreshButton').addEventListener('click', () => {
    // Get the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        // Refresh the current tab
        chrome.tabs.reload(tabs[0].id)
    })
})

const SELECTORS = ['activities__list', 'banking-balance', 'banking-balance__assets']

document.addEventListener('DOMContentLoaded', () => {
    SELECTORS.forEach(selector => {
        const curr = document.getElementById(selector)

        if (curr) {
            chrome.storage.local.get([selector], (result) => {
                curr.checked = result[selector] || false
            })

            curr.addEventListener('change', () => {
                chrome.storage.local.set({ [selector]: curr.checked })
            })
        }
    })
})
