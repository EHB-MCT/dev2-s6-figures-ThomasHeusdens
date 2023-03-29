import Figure from "./Figure.js";

export default class Rectangle extends Figure {
	constructor(name, width, height) {
		super(name);
		this.width = width;
		this.height = height;
	}

	get Area() {
		return this.width * this.height;
	}

	get innerHtml() {
		return `<div class="result">
        <div class="figure rectangle" style="width: WIDTHpx; height: HEIGHTpx;"></div>
        <div class="infoBox">
          <h3>${this.name}</h3>
          <dl>
            <dt>${this.height}</dt>
            <dd>HEIGHT px</dd>
      
            <dt>${this.width}</dt>
            <dd>WIDTH px</dd>
      
            <dt>${this.Area}</dt>
            <dd>AREA px</dd>
      
            <dt>Circumference</dt>
            <dd>CIRCUMFERENCE px</dd>
          </dl>
        </div>
      </div>`;
	}
}
