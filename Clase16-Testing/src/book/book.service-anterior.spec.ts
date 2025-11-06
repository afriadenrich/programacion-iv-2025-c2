import { Test, TestingModule } from '@nestjs/testing';
import { BookService } from './book.service';
import { getModelToken } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import mongoose, { model, Model } from 'mongoose';
import { BadRequestException, NotFoundException } from '@nestjs/common';

describe('BookService', () => {
  let bookService: BookService;
  let bookModel;

  const servicioLibroFalso = {
    findById: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
    find: jest.fn(),
  };

  const libroEjemplo = {
    _id: '61c0ccf11d7bf83d153d7c06',
    title: 'New Book',
    description: 'Book Description',
    author: 'Author',
    price: 100,
    category: 'Classics',
  };

  beforeEach(async () => {
    const moduloDeTesting: TestingModule = await Test.createTestingModule({
      providers: [
        BookService,
        // MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }]),
        // No puedo conectar a la DB realmente, tengo que fingir que pasa
        {
          provide: getModelToken(Book.name),
          useValue: servicioLibroFalso, // mockBookService
        },
      ],
    }).compile();

    bookService = moduloDeTesting.get<BookService>(BookService);
    bookModel = moduloDeTesting.get<Model<Book>>(getModelToken(Book.name));
  });

  describe('findById', () => {
    // it("should throw a BadRequestException if an invald ID is provided")
    it('debería lanzar una BadRequestException en caso de ID invalido', async () => {
      const id = 'asdasd';

      // fingir la llamada al método
      // Forzar a que el id sea invalido
      const isValidObjectIdMock = jest
        .spyOn(mongoose, 'isValidObjectId')
        .mockReturnValue(false);

      // comprobar que se lance la excepción
      await expect(bookService.findById(id)).rejects.toThrow(
        BadRequestException,
      );

      expect(isValidObjectIdMock).toHaveBeenCalledWith(id);
      isValidObjectIdMock.mockRestore();
    });

    it('debería lanzar una NotFoundException en caso de no encontrar el libro', async () => {
      // mockReturnValue -> return x
      // mockResolvedValue -> promesas -> await return x
      jest.spyOn(bookModel, 'findById').mockResolvedValue(null);

      await expect(bookService.findById(libroEjemplo._id)).rejects.toThrow(
        NotFoundException,
      );

      expect(bookModel.findById).toHaveBeenCalledWith(libroEjemplo._id);
    });

    it('debería encontrar un libro por ID y devolverlo', async () => {
      jest.spyOn(bookModel, 'findById').mockResolvedValue(libroEjemplo);

      await expect(bookService.findById(libroEjemplo._id)).resolves.toEqual(
        libroEjemplo,
      );

      expect(bookModel.findById).toHaveBeenCalledWith(libroEjemplo._id);

      // expect(mongoose.isValidObjectId).toHaveReturnedWith(() => true); -> NO VA, tiene que ser mock
    });
  });

  describe('findAll', () => {
    it('debería devolver un array de libros', async () => {
      jest.spyOn(bookModel, 'find').mockImplementation(() => ({
        limit: () => ({
          skip: () => [libroEjemplo],
        }),
      }));

      expect(
        bookService.findAll({
          page: '1',
          keyword: 'a',
        }),
      ).resolves.toEqual([libroEjemplo]);
    });
  });
  describe('create', () => {});

  describe('updateById', () => {
    it('debería hacer un update y devolverlo', async () => {
      const libroActualizado = { ...libroEjemplo, price: 200 };

      jest
        .spyOn(bookModel, 'findByIdAndUpdate')
        .mockResolvedValue(libroActualizado);

      expect(
        bookModel.findByIdAndUpdate(libroEjemplo._id, { price: 200 }),
      ).resolves.toEqual(libroActualizado);
    });
  });

  describe('deleteById', () => {
    it('debería hacer un delete y devolverlo', async () => {
      jest
        .spyOn(bookModel, 'findByIdAndDelete')
        .mockResolvedValue(libroEjemplo);

      const resultado = await bookService.deleteById(libroEjemplo._id);

      expect(resultado).toEqual(libroEjemplo);
      //   expect(bookModel.findByIdAndDelete(libroEjemplo._id)).rejects.toEqual(
      //     libroEjemplo,
      //   );
    });
    it('debería fallar el delete y devolver null', async () => {
      jest.spyOn(bookModel, 'findByIdAndDelete').mockResolvedValue(null);

      expect(bookModel.findByIdAndDelete(libroEjemplo._id)).resolves.toEqual(
        null,
      );
    });
  });
});
