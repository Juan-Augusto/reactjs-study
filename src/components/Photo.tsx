import {ReactNode} from 'react';

type Props = {
    subtitle: string;
    children: ReactNode;
}
export const Photo = ({children, subtitle}: Props) =>{
    return(
        <>
            {children}
            <p>{subtitle}</p>
        </>
    );
}