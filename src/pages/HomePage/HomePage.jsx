import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to Phonebook</h1>
      <p className={css.description}>
        Phonebook is a simple and efficient application for managing your
        contacts. With Phonebook, you can easily add, edit and delete contacts.
        It is designed to be user-friendly and intuitive, making contact
        management straightforward and hassle-free.
      </p>
      <div className={css.about}>
        <h2 className={css.subtitle}>About the Developer</h2>
        <p className={css.text}>
          This application was developed by Kateryna Zazulyak. Kateryna is a
          passionate developer with a focus on creating user-friendly
          applications and innovative solutions. If you have any feedback or
          suggestions, feel free to reach out via{" "}
          <a href="mailto:k.zazuliak@gmail.com" className={css.email}>
            email: k.zazuliak@gmail.com.
          </a>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
