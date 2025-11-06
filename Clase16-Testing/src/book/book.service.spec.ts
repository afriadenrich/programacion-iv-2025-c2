import { Test } from '@nestjs/testing';
import { BookService } from './book.service';
import {
  BadRequestException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { Book } from './schemas/book.schema';
import { getModelToken } from '@nestjs/mongoose';

describe('BookService', () => {
  let bookService: BookService;
  let bookModel;

  const bookModelMockup = {
    findById: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
    find: jest.fn(),
    create: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const testingModule = await Test.createTestingModule({
      providers: [
        BookService,
        {
          provide: getModelToken(Book.name),
          useValue: bookModelMockup,
        },
      ],
    }).compile();

    bookService = testingModule.get(BookService);
    bookModel = testingModule.get<Model<Book>>(getModelToken(Book.name));
  });

  describe('findyById', () => {
    it('should lanzar excepcion si id no es valido', () => {
      jest.spyOn(mongoose, 'isValidObjectId').mockImplementation(() => false);

      expect(bookService.findById).rejects.toThrow(BadRequestException);
    });

    it('should throw NotFoundException si no encuentra', () => {
      jest.spyOn(mongoose, 'isValidObjectId').mockImplementation(() => true);
      jest.spyOn(bookModel, 'findById').mockResolvedValue(null);

      expect(bookService.findById('')).rejects.toThrow(NotFoundException);
    });

    it('should return un libro', () => {
      jest.spyOn(mongoose, 'isValidObjectId').mockImplementation(() => true);
      jest.spyOn(bookModel, 'findById').mockResolvedValue({ aLaVenta: true });

      expect(bookService.findById('')).resolves.toEqual({ aLaVenta: true });
    });

    it('should return el libro no está a la venta', () => {
      jest.spyOn(mongoose, 'isValidObjectId').mockImplementation(() => true);
      jest.spyOn(bookModel, 'findById').mockResolvedValue({ aLaVenta: false });

      expect(bookService.findById('')).rejects.toThrow(ForbiddenException);
    });
  });
});
