export class Todo {
	private title: string;
	private id: string;
	private completion: boolean;

	constructor(title: string) {
		this.title = title;
		this.id = `${title}-${Math.round(Math.random() * 100000)}`;
		this.completion = false;
	}

	getTitle() {
		return this.title;
	}

	getId() {
		return this.id;
	}

	isCompleted() {
		return this.completion;
	}

	setTitle(title: string) {
		this.title = title;
	}

	setCompleted(val: boolean) {
		this.completion = val;
	}

	toggleCompletion() {
		this.completion = !this.completion;
	}
}
