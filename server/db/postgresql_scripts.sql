CREATE TABLE "Author" (
  "id"  serial  UNIQUE,
  "name"  varchar,
  "age"  varchar,
  CONSTRAINT Author_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Book" (
  "id"  serial  UNIQUE,
  "name"  varchar,
  "genre"  varchar,
  "authorId"  serial,
  CONSTRAINT Book_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


ALTER TABLE "Book" ADD CONSTRAINT "Book_fk0" FOREIGN KEY ("authorId") REFERENCES "Author"("id");
