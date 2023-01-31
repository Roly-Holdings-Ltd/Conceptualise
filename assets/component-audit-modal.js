class AuditModal extends HTMLElement {
    constructor() {
        super();

        this.modal = this;
        this.modalContent = this.querySelector('.audit-modal__modal');
        this.open = document.querySelectorAll("[data-open-audit-modal]");
        this.close = this.querySelector(".btn-close");

        this.open.forEach(openButton => {
            let modal = document.querySelector('audit-modal')
            openButton.addEventListener("click", (e) => {
                e.preventDefault();
                modal.classList.remove('modal-hidden');
            });
        });

        this.close.addEventListener("click", this.closeModal.bind(this));

        document.addEventListener("keydown", function (e) {
            let modal = document.querySelector('audit-modal');
            if (e.key === "Escape" && !modal.classList.contains("modal-hidden")) {
                modal.classList.add("modal-hidden");
            }
        });

        document.addEventListener("click", function(event) {
            let modal = document.querySelector('audit-modal')
            if (event.target.matches("audit-modal") && !event.target.closest(".modal") && !modal.classList.contains("modal-hidden")) {
                modal.classList.add("modal-hidden");
            }
        })
    }

    openModal() {
        let self = this;
        self.modal.classList.remove("modal-hidden");
      };

    closeModal() {
        let self = this;
        self.modal.classList.add("modal-hidden");
    }
  }
  
customElements.define('audit-modal', AuditModal);
