import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en <GifGrid />', () => {

    const category = "Futbol";

    test('Debe de mostrar el Loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={category} />);

        expect(screen.getByText("Cargando..."));
        expect(screen.getByText(category));
    });

    test('Debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
        const gifs = [{
            id: "id1",
            title: "Titulo1",
            url: "http://prueba.com/image1.jpg"
        },
        {
            id: "id2",
            title: "Titulo2",
            url: "http://prueba.com/image2.jpg"
        }];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole("img").length).toBe(2);
    });

});