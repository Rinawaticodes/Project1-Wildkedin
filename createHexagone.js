function createHexagone(wilder) {
  // This function should create a card item
  return `
    <li class="hex">
      <div class="hexIn">
        <a class="hexLink" href="#">
          <img src=${wilder.img} alt="" />
          <h1>${wilder.name}/h1>
          <p>${wilder.desc}</p>
        </a>
      </div>
    </li>
  `;
}
  
export default createHexagone;