export default interface TabsInterface {
    /**
    * Titulo da aba
    */
    title: string;
    /**
    * Se true nossa aba estara ativa
    * default false
    */
    active: boolean;
    /**
    * Link de navegacao
    */
    link: string;
}