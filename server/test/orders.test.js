import request from 'supertest';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import orders from './filler/orders';

chai.use(chaiHttp);

describe('Post api/v1/order', () => {
  describe('test to create orders', () => {
    it('should return status code 400 when creating an order without user ID',
      (done) => {
        request(app)
          .post('/api/v1/order')
          .send(orders.create.incomplete.userId)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.success).to.equal(false);
            done();
          });
      });
  });
  describe('test to create orders', () => {
    it('should return status code 400 when creating an order without meal Id',
      (done) => {
        request(app)
          .post('/api/v1/order')
          .send(orders.create.incomplete.mealId)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.success).to.equal(false);
            done();
          });
      });
  });
  describe('test to create orders', () => {
    it('should return status code 400 when creating an order without order Id',
      (done) => {
        request(app)
          .post('/api/v1/order')
          .send(orders.create.incomplete.orderId)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.success).to.equal(false);
            done();
          });
      });
  });
  describe('test to create orders', () => {
    it('should return status code 200 when successfully created',
      (done) => {
        request(app)
          .post('/api/v1/order')
          .send(orders.create.complete.a)
          .end((err, res) => {
            expect(res.statusCode).to.equal(201);
            expect(res.body.success).to.equal(true);
            expect(res.body.message).to.eql('successfully ordered');
            done();
          });
      });
  });
  describe('test to create orders', () => {
    it('should return status code 200 when successfully created',
      (done) => {
        request(app)
          .post('/api/v1/order')
          .send(orders.create.complete.b)
          .end((err, res) => {
            expect(res.statusCode).to.equal(201);
            expect(res.body.success).to.equal(true);
            expect(res.body.message).to.eql('successfully ordered');
            done();
          });
      });
  });
  describe('test to create orders', () => {
    it('should return status code 200 when successfully created',
      (done) => {
        request(app)
          .post('/api/v1/order')
          .send(orders.create.complete.c)
          .end((err, res) => {
            expect(res.statusCode).to.equal(201);
            expect(res.body.success).to.equal(true);
            expect(res.body.message).to.eql('successfully ordered');
            done();
          });
      });
  });
  describe('test to create orders', () => {
    it('should return status code 200 when successfully created',
      (done) => {
        request(app)
          .post('/api/v1/order')
          .send(orders.create.complete.d)
          .end((err, res) => {
            expect(res.statusCode).to.equal(201);
            expect(res.body.success).to.equal(true);
            expect(res.body.message).to.eql('successfully ordered');
            done();
          });
      });
  });
});

// get all order
describe('get api/v1/order', () => {
  describe('test to fetch all orders', () => {
    it('should return status code 200 when all order fetched',
      (done) => {
        request(app)
          .get('/api/v1/order')
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            done();
          });
      });
  });
});

// get a single order
describe('get single oders api/v1/order/:orderId', () => {
  describe('test to fetch single order', () => {
    it('should return status code 200 when single order fetched',
      (done) => {
        request(app)
          .get('/api/v1/order/10')
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            done();
          });
      });
  });
  describe('test to fetch single order', () => {
    it('should return status code 200 when single order fetched',
      (done) => {
        request(app)
          .get('/api/v1/order/11')
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            done();
          });
      });
  });
  describe('test to fetch single order', () => {
    it('should return status code 200 when single order fetched',
      (done) => {
        request(app)
          .get('/api/v1/order/12')
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            done();
          });
      });
  });
  describe('test to fetch single order', () => {
    it('should return status code 200 when single order fetched',
      (done) => {
        request(app)
          .get('/api/v1/order/13')
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            done();
          });
      });
  });
  describe('test to fetch single order', () => {
    it('should return status code 400 when single order fetched not available',
      (done) => {
        request(app)
          .get('/api/v1/order/14')
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.message).to.equal('no order available');
            done();
          });
      });
  });
});

// modify a single order
describe('get single oders api/v1/order/:orderId', () => {
  describe('test to fetch single order', () => {
    it('should return status code 400 when single order hasn\'t been modified',
      (done) => {
        request(app)
          .put('/api/v1/order/14')
          .send(orders.modify.incorrect.a)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.message).to.equal('order not available');
            done();
          });
      });
  });
  describe('test to fetch single order', () => {
    it('should return status code 400 when single order hasn\'t been modified',
      (done) => {
        request(app)
          .put('/api/v1/order/15')
          .send(orders.modify.incorrect.b)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.message).to.equal('order not available');
            done();
          });
      });
  });
  describe('test to modify single order', () => {
    it('should return status code 400 when single order hasn\'t been modified',
      (done) => {
        request(app)
          .put('/api/v1/order/16')
          .send(orders.modify.incorrect.c)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(res.body.message).to.equal('order not available');
            done();
          });
      });
  });

  describe('test for fetching single order', () => {
    it('should return status code 200 when single order has been modified',
      (done) => {
        request(app)
          .put('/api/v1/order/10')
          .send(orders.modify.complete.a)
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            done();
          });
      });
  });
  describe('test to modify single order', () => {
    it('should return status code 200 when single order has been modified',
      (done) => {
        request(app)
          .put('/api/v1/order/11')
          .send(orders.modify.complete.b)
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body.success).to.equal(true);
            done();
          });
      });
  });
  describe('test to modify single order', () => {
    it('should return status code 200 when single order has been modified',
      (done) => {
        request(app)
          .put('/api/v1/order/12')
          .send(orders.modify.complete.c)
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body.success).to.equal(true);
            done();
          });
      });
  });
  describe('test to modify single order', () => {
    it('should return status code 200 when single order has been modified',
      (done) => {
        request(app)
          .put('/api/v1/order/13')
          .send(orders.modify.complete.c)
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body.success).to.equal(true);
            done();
          });
      });
  });
});
