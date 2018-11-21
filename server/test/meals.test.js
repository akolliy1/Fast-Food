import request from 'supertest';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import { create, put } from './filler/meals';

chai.use(chaiHttp);

describe('Post api/v1/meals', () => {
  describe('test for all meals input registeration', () => {
    it('should return status code 400 when title is empty',
      (done) => {
        request(app)
          .post('/api/v1/meals')
          .send(create.incomplete.title)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.error[0].title)
              .equal('title field cannot be empty');
            done();
          });
      });
  });
  describe('test for all meals input registeration', () => {
    it('should return status code 400 when desc is empty',
      (done) => {
        request(app)
          .post('/api/v1/meals')
          .send(create.incomplete.desc)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.error[0].desc)
              .equal('desc field cannot be empty');
            done();
          });
      });
  });
  describe('test for all meals input registeration', () => {
    it('should return status code 400 when price is empty',
      (done) => {
        request(app)
          .post('/api/v1/meals')
          .send(create.incomplete.price)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.error[0].price)
              .equal('price field msut be greather than 100');
            done();
          });
      });
  });
  describe('test for all meals input registeration', () => {
    it('should return status code 400 when img is empty',
      (done) => {
        request(app)
          .post('/api/v1/meals')
          .send(create.incomplete.img)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.error[0].img)
              .equal('image field cannot be empty');
            done();
          });
      });
  });
  describe('test for all meals input registeration', () => {
    it('should return status code 400 when all fields are empty',
      (done) => {
        request(app)
          .post('/api/v1/meals')
          .send(create.incomplete.deep)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.error).to.be.an('array');
            done();
          });
      });
  });
  describe('test for all meals input registeration', () => {
    it('should return status code 201 when successful',
      (done) => {
        request(app)
          .post('/api/v1/meals')
          .send(create.complete)
          .end((err, res) => {
            expect(res.statusCode).to.equal(201);
            expect(res.body.success)
              .equal(true);
            done();
          });
      });
  });
  describe('test for all meals input registeration', () => {
    it('should return status code 201 when successful',
      (done) => {
        request(app)
          .post('/api/v1/meals')
          .send(create.alreadyExist)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.success)
              .equal(false);
            done();
          });
      });
  });
});

// get all meals and single meal
describe('Post api/v1/meals', () => {
  describe('test for fetching all meals', () => {
    it('should return status code 200 when fetched',
      (done) => {
        request(app)
          .get('/api/v1/meals')
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body.meal);
            done();
          });
      });
  });
  describe('test for fetching single meals', () => {
    it('should return status code 200 when a single meal fetched',
      (done) => {
        request(app)
          .get('/api/v1/meals/1')
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body.isSingleMeal).to.be.an('array');
            done();
          });
      });
  });
  describe('test for fetching single meals', () => {
    it('should return status code 400 when nothing fetched',
      (done) => {
        request(app)
          .get('/api/v1/meals/100')
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.message).to.equal('meal not found');
            done();
          });
      });
  });
});
