export class Todo {
	private title: string;
	private id: string;

	constructor(title: string) {
		this.title = title;
		this.id = `${title}-${Math.round(Math.random() * 100000)}`;
	}

	getTitle() {
		return this.title;
	}

	getId() {
		return this.id;
	}

	setTitle(title: string) {
		this.title = title;
	}
}
