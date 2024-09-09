import { Roboto, Fauna_One } from "next/font/google";

export const roboto =
    Roboto(
        {
            weight: [
                '100',
                '300',
                '400',
                '500',
                '700',
                '900',
            ],
            subsets: ['latin']
        }
    );

export const faunaOne = Fauna_One({weight: ['400'], subsets: ['latin'] });