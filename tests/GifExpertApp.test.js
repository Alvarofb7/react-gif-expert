import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas de <GifExpertApp />', () => {

    test('Debe de aparecer la nueva categoria en pantalla si se añade', () => {
        const { container} = render(<GifExpertApp />);
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");
        fireEvent.input(input, { target: { value: "Categoria" } });
        fireEvent.submit(form);

        expect(screen.getByText("Categoria")).toBeTruthy();
        expect(container).toMatchSnapshot();
    });

});