DROP TABLE IF EXISTS text_message;

CREATE TABLE text_message (
  commentId INTEGER PRIMARY KEY AUTOINCREMENT,
  string TEXT NOT NULL
);

INSERT INTO text_message (string) VALUES ('Hello, world from the database!');
