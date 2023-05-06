import {NextPage, GetStaticProps} from 'next'
/**
 * Translations
 */
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from "react-i18next";

const Home: NextPage = () => {

    const {t} = useTranslation('common');

    return (
        <div>
            <div className="text-xl font-medium accent-red-600">ChitChat</div>
            <p className="text-accent">You have a new message!</p>
        </div>
    )
};

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
};

export default Home