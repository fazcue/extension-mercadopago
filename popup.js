document.getElementById('refreshButton').addEventListener('click', () => {
    // Get the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        // Refresh the current tab
        chrome.tabs.reload(tabs[0].id)
    })
})
