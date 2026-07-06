import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { Formik, Form, Field } from "formik";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

interface SearchValues {
  query: string;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const initialValues: SearchValues = {
    query: "",
  };

  const handleSubmit = (
    values: SearchValues,
    actions: { resetForm: () => void },
  ) => {
    const query = values.query;

    if (!query) {
      toast.error("Please enter your search query.");
      return;
    }

    onSubmit(query);
    actions.resetForm();
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <Field
              type="text"
              name="query"
              className={styles.input}
              placeholder="Search movies..."
              autoFocus
            ></Field>
            <button className={styles.button} type="submit">
              Search
            </button>
          </Form>
        </Formik>
      </div>
    </header>
  );
}
