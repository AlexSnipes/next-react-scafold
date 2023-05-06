import {NextPage, GetStaticProps} from 'next'
import {useRouter} from "next/router";
/**
 * Translations
 */
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from "react-i18next";
import Card from "@/common/card";

/**
 * Components
 */

export default function ProductListPage() {
    const {t} = useTranslation('common');
    const {query: { store }} = useRouter();

    return (
        <div>
            <h1>{t('products')}</h1>
            <Card className="">
                Test
            </Card>
        </div>
    )
}
export const getServerSideProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});
