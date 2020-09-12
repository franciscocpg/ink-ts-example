#!/usr/bin/env -S yarn -s ts-node
import React from 'react';
import { render } from 'ink';
import meow from 'meow';
import { App } from './ui';

const cli = meow(`
	Usage
	  $ src/cli.ts

	Options
	  --name  Your name

	Examples
	  $ src/cli.ts --name=Jane
	  Hello, Jane
`);

render(React.createElement(App, cli.flags));
