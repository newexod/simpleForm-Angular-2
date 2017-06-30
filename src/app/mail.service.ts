import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

	messages = [
		{id: 0, text: `it's first message`},
		{id: 1, text: `it's second message`},
		{id: 2, text: `it's third message`},
	];

	update(id, text) {
		this.messages = this.messages.map(m =>
			m.id === id
				? {id, text}
				: m
		)
	}

  constructor() { }

}
