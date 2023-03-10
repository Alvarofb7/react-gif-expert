import { GifItem } from "../../src/components/GifItem"
import { render, screen } from "@testing-library/react"

describe('Pruebas en <GiftItem />', () => {

    const props = {
        title: "Titulo",
        url: "https://alvaro.com/image.jpg"
    };

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(<GifItem {...props} />);

        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem {...props} />);

        // screen.debug();
        // expect(screen.getByRole("img").alt).toBe(props.title);
        // expect(screen.getByRole("img").src).toBe(props.url);

        const { src, alt } = screen.getByRole("img");
        expect(src).toBe(props.url);
        expect(alt).toBe(props.title);
    });

    test('Debe de mostrar el titulo en el componente', () => {
        render(<GifItem {...props} />);
        
        expect(screen.getByText(props.title)).toBeTruthy();
    });

});