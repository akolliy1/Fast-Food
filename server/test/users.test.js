import request from 'supertest';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import { create, login } from './filler/users';

chai.use(chaiHttp);

describe('Post api/v1/user/signup', () => {
  describe('test for all customer input registeration', () => {
    it('should return status code 400 when first name is empty',
      (done) => {
        request(app)
          .post('/api/v1/users/signup')
          .send(create.incomplete.name)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.errors[0].firstName)
              .equal('first name must be at least 3 aphabeltical characters');
            done();
          });
      });
  });
  describe('test for all customer input registeration', () => {
    it('should return status code 400 when first name lenght is below 3',
      (done) => {
        request(app)
          .post('/api/v1/users/signup')
          .send(create.incomplete.nameLenght)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.errors[0].firstName)
              .equal('first name must be at least 3 aphabeltical characters');
            done();
          });
      });
  });
  describe('test for all customer input registeration', () => {
    it('should return status code 400 when last name is empty',
      (done) => {
        request(app)
          .post('/api/v1/users/signup')
          .send(create.incomplete.lastName)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.errors[0].lastName)
              .equal('last name must be at least 3 aphabeltical characters');
            done();
          });
      });
  });
  describe('test for all customer input registeration', () => {
    it('should return status code 400 when last name is empty',
      (done) => {
        request(app)
          .post('/api/v1/users/signup')
          .send(create.incomplete.lastNameLenght)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.errors[0].lastName)
              .equal('last name must be at least 3 aphabeltical characters');
            done();
          });
      });
  });
  describe('test for all customer input registeration', () => {
    it('should return status code 400 when email is not valid',
      (done) => {
        request(app)
          .post('/api/v1/users/signup')
          .send(create.incomplete.email)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.errors[0].email).equal('Email chracter must be valid');
            done();
          });
      });
  });
  describe('test for all customer input registeration', () => {
    it('should return status code 400 when password is not valid',
      (done) => {
        request(app)
          .post('/api/v1/users/signup')
          .send(create.incomplete.password)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.errors[0].password).equal('Password chracter must be valid');
            done();
          });
      });
  });
  describe('test for all customer input registeration', () => {
    it('should return status code 400 when password length is not valid',
      (done) => {
        request(app)
          .post('/api/v1/users/signup')
          .send(create.incomplete.passwordLenght)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.errors[0].password).equal('Password chracter must be valid');
            done();
          });
      });
  });
  describe('test for all customer input registeration', () => {
    it('should return status code 201 if signup was successful',
      (done) => {
        request(app)
          .post('/api/v1/users/signup')
          .send(create.complete)
          .end((err, res) => {
            expect(res.statusCode).to.equal(201);
            expect(res.body.success).equal(true);
            done();
          });
      });
  });
});

// user login
describe('Post api/v1/user/signin', () => {
  describe('test for all customer login', () => {
    it('should return status code 400 when email is not valid',
      (done) => {
        request(app)
          .post('/api/v1/users/signin')
          .send(login.incomplete.email)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.errors[0].email).equal('Email chracter must be valid');
            done();
          });
      });
  });
  describe('test for all customer login', () => {
    it('should return status code 400 when email is not valid',
      (done) => {
        request(app)
          .post('/api/v1/users/signin')
          .send(login.incomplete.invalidEmail)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.errors[0].email).equal('Email chracter must be valid');
            done();
          });
      });
  });
  describe('test for all customer login', () => {
    it('should return status code 400 when password is not valid',
      (done) => {
        request(app)
          .post('/api/v1/users/signin')
          .send(login.incomplete.password)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.errors[0].password).equal('Password chracter must be valid');
            done();
          });
      });
  });
  describe('test for all customer login', () => {
    it('should return status code 400 when password length is not valid',
      (done) => {
        request(app)
          .post('/api/v1/users/signin')
          .send(login.incomplete.invalidPassword)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.errors[0].password).equal('Password chracter must be valid');
            done();
          });
      });
  });
  describe('test for all customer login', () => {
    it('should return status code 400 if signin was unsuccessful',
      (done) => {
        request(app)
          .post('/api/v1/users/signin')
          .send(login.incorrect)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.errors).equal('user not found');
            done();
          });
      });
  });
  describe('test for all customer login', () => {
    it('should return status code 200 if signin was successful',
      (done) => {
        request(app)
          .post('/api/v1/users/signin')
          .send(login.correct)
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body.message).equal('login successfuly');
            done();
          });
      });
  });
});
