const chai = require("chai");
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', () => {

  test("Test POST /api/books with title", function(done) {
          chai
            .request(server)
            .post("/api/books")
            .send({ title: "test title" })
            .end((err, res) => {
              bookId = res.body._id;
              assert.equal(res.status, 200);
              assert.equal(res.body.title, "test title");
              done();
            });
        });

        test("Test POST /api/books with no title given", function(done) {
          chai
            .request(server)
            .post("/api/books")
            .send({})
            .end((err, res) => {
              assert.equal(res.status, 200);
              assert.equal(res.body, "missing required field title");
              done();
            });
        });





});

