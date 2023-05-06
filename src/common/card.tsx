import {FC} from "react";
import cn from "classnames";
interface CardProps {
    className: string;
    children: any;
}
const Card:FC<CardProps> = ({className, children}) => {
    return (
        <div className={cn("", className)}>
            {children}
        </div>
    )
}

export default Card;