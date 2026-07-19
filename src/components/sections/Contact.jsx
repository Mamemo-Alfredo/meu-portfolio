import Title from '../common/Title';
import HeaderCard from '../common/HeaderCard';
import Input from '../common/Input';
import Button from '../common/Button';

function Contact() {
    return(
        <section className="p-8 px-10 md:px-20" id="contact">
            <Title id="04" texto="vamos-conversar" />
            <div className="border border-green-400">
                <HeaderCard header="vamos-conversar"/>
                <div className="border-t border-green-400 p-4">
                    <form action="" method="post">
                        <Input label="Nome" type="text" tamanho="100%" />
                        <Input label="Email" type="email" tamanho="100%" />
                        <Input label="Assunto" type="text" tamanho="100%" />

                        <Button texto="Enviar" cor_fundo="#05df72" border="solid #05df72 3px" width="100%" />
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;