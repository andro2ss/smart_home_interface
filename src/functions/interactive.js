import interact from "interactjs";
import draggableOnMove from "./draggableOnMove";

export default function interactive() {
  interact(".modal__window")
    .resizable({
      // resize from all edges and corners
      edges: { left: true, right: true, bottom: true, top: true },

      listeners: {
        move(event) {
          let target = event.target;
          let x = parseFloat(target.getAttribute("data-x")) || 0;
          let y = parseFloat(target.getAttribute("data-y")) || 0;

          // update the element's style
          target.style.width = event.rect.width + "px";
          target.style.height = event.rect.height + "px";

          // translate when resizing from top or left edges
          x += event.deltaRect.left;
          y += event.deltaRect.top;

          target.style.transform = "translate(" + x + "px," + y + "px)";

          target.setAttribute("data-x", x);
          target.setAttribute("data-y", y);
        },
      },
      modifiers: [
        // keep the edges inside the parent
        interact.modifiers.restrictEdges({
          outer: "parent",
        }),

        // minimum size
        interact.modifiers.restrictSize({
          min: { width: 100, height: 50 },
        }),
      ],

      inertia: true,
    })
    .draggable({
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
