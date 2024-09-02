const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const experience_modals = document.querySelectorAll('.modal-experience.active')
        const class_modals = document.querySelectorAll('.modal-class.active')

        experience_modals.forEach(modal => {
            closeModal(modal)
        })
        class_modals.forEach(modal => {
            closeModal(modal)
        })

        modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal-experience.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const experience_modal = button.closest('.modal-experience')
        const class_modal = button.closest('.modal-class')
        closeModal(experience_modal)
        closeModal(class_modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}