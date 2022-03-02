import interact from "interactjs";
import draggableOnMove from "./draggableOnMove";

export default function interactive() {
  interact(".modal__window").draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: "parent",
        endOnly: true,
      }),
    ],
    // enable autoScroll
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: draggableOnMove,

      // call this function on every dragend event
      end(event) {
        var textEl = event.target.querySelector("p");

        textEl &&
          (textEl.textContent =
            "moved a distance of " +
            Math.sqrt(
              (Math.pow(event.pageX - event.x0, 2) +
                Math.pow(event.pageY - event.y0, 2)) |
                0
            ).toFixed(2) +
            "px");
      },
    },
  });
}
