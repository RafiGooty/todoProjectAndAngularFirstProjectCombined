# Todo Starter Repository

This is the starter repository for your todo application project. This project should be **forked** to your personal gitlab.com account.

## What you will be building

![Todo App](screenshots/some-todos.png "Todo App")

See the screenshots directory for more examples.

## Application Requirements

### No todos

When there are no todos, show only the input box.

### New todo

New todos are entered in the input at the top of the app. The input element should be focused when the page is loaded. Pressing Enter creates the todo, appends it to the todo list, and clears the input.

### Mark all as complete

This checkbox toggles all the todos to completed. Make sure to clear the checked state after the "Clear completed" button is clicked. The "Mark all as complete" checkbox should also be updated when single todo items are checked/unchecked. Eg. When all the todos are checked it should also get checked.

### Item

A todo item has three possible interactions:

1. Clicking the checkbox marks the todo as complete.

2. Double-clicking the item activates editing mode.

3. Hovering over the todo shows the remove button.

### Editing

When editing mode is activated it will hide the other controls and bring forward the input that contains the todo title, which should be focused. The edit should be saved on both blur and enter. If it's empty the todo should instead be destroyed. If escape is pressed during the edit, the edit state should be left and any changes be discarded.

### Counter

Displays the number of active todos in a pluralized form. Make sure to pluralize the `item` word correctly: `0 items`, `1 item`, `2 items`. Example: **2** items left

### Clear completed button

Removes completed todos when clicked. Should be hidden when there are no completed todos.

### Persistence

Your app should persist the todos to storage.

## Bootcamp Requirements

*  Demonstrate weekly progress
*  All code should be version controlled (git) and pushed to Gitlab.com.
   * The commit history should tell the story of how the code was developed. 
   * Keep commits small.
*  Deployment
   * Must be by pipeline (see sample pipeline below).
   * Must be hosted on a cloud-based provider (e.g. Heroku, Amazon AWS, etc.)
   * Deployed artifact must be a Docker container.
   * Must be versioned.
*  Tests
    * Runnable locally.
    * Runnable from your pipeline.
*  Database 
    * Changes must be automated (e.g. Liquibase / Flyway).
    * Changes must be version controlled.
    * Rolled out using your pipeline.

## Bootcamp Completion Criteria

*  On completion of the bootcamp, you must be able to: 
   * Demo the working application.
   * Make a code change that is deployed to your cloud environment.
   * Demo a breaking application change using your pipeline (e.g. failing test)

## Sample Pipeline 

Your pipeline should include at **least** the following steps:

* Linting
* Build
* Tests
  * Unit Tests
  * Integration Tests
* Deployment
  * Database changes
  * Application

## References

* [Semantic Commits](https://seesparkbox.com/foundry/semantic_commit_messages)
* [A quick guide to GitLab CI/CD pipelines](https://about.gitlab.com/blog/2019/07/12/guide-to-ci-cd-pipelines/)
* [Docker](https://www.docker.com/)
* [Heroku](https://www.heroku.com/)
