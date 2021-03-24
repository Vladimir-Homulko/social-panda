import s from './Description.module.css';

const Description = () => {
    return(
        <div className={ s.description }>
            <div>
                Vladimir H.
            </div>
            <div>
                Date of Birth: 29 january
            </div>
            <div>
                City: Kharkiv
            </div>
            <div>
                Stastus: Master Panda
            </div>
        </div>
    );
}

export default Description;