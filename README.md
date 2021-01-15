# inbox

## Installation

After you have cloned:

```sh
cd inbox-slider
yarn && yarn start
```

On a different shell start the server:

```sh
yarn serve
```

## Exercise

Here are 2 visuals for you:

- Inbox: a notification slider. This is the component the exercise revolves around.

![The Inbox](./assets/inbox.png)

The Slider has been already implemented for you in the current repo.

Clone it and follow the instructions to get it up and running.
If everything goes smoothly you will have a local version of the slider visibile on http://localhost:3000/

The slider is currently working and making calls to an endpoint that returns Loan data `/api/inbox/loans`.

We now have to support a second endpoint that returns data related to the Till, `api/inbox/till`.
This is your task for today, making sure that the existing `<Inbox />` Component works for both use cases.

You are free to approach the task in any way that makes sense for you.
Feel free to modify and restructure any of the existing files in the `src/` directory to make sure that the component adapts to the new requirements.
You are encouraged to change the existing implementation and suggest any improvement to make it more solid and future proof.

Some details for you to consider:

- Since the interaction is very simple, please avoid adding any state management library (like Redux, Mobx or similar).
- Clear separation of concerns.
- This is very important, solve it like you'd do considering a bigger picture of an existing codebase that will grow and change in the future in ways that are hard to predict today.
- I'll appreciate if you could git commit each relevant step of your development.
- Don't try and make it perfect at all cost though. Some rough edges here and there are totally ok. If you feel something can be improved add your view about it in the readme and we can just talk through it on our next call. As long as there's enough for us to review and to see where your strengths are it will be alright.

Once finished please:

1. upload master to a private repo under your personal Github profile
2. open a Private Repository against it with your solution
3. **transfer the ownership** of the repo to my account https://github.com/vodera/

Good luck!

