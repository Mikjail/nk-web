import { Form } from "./form/form";
import { MsgSent } from "./msg-sent/msgSent";

export const Modal = () => {
  return /*html*/ `
        <div class="modal-header">
            <span class="modal-header__close" id="close-btn">&times;</span>
        </div>
        <div class="modal-body" id="modal-content">
            ${Form()}
        </div>
    `;
};
