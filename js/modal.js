const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-btn]')
const dialogs = document.querySelectorAll('dialog.modal')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const dialog = document.querySelector(button.dataset.modalTarget)
        if (!(dialog instanceof HTMLDialogElement) || dialog.open) return
        dialog.showModal()
        dialog.focus()
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const dialog = button.closest('dialog')
        if (dialog?.open) dialog.close()
    })
})

dialogs.forEach(dialog => {
    dialog.addEventListener('keydown', event => {
        if (event.key !== 'Escape') return
        event.preventDefault()
        dialog.close()
    })

    dialog.addEventListener('click', event => {
        if (event.target !== dialog) return

        const bounds = dialog.getBoundingClientRect()
        const clickedOutside = event.clientX < bounds.left || event.clientX > bounds.right
            || event.clientY < bounds.top || event.clientY > bounds.bottom

        if (clickedOutside) dialog.close()
    })
})
