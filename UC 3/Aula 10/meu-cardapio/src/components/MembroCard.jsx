import styles from "./MembroCard.module.css";

function MembroCard({ nome, papel, habilidades, lider }) {
  const iniciais = nome
    .split(" ")
    .map((parte) => parte[0])
    .join("");

  return (
    <article className={styles.card}>
      {lider && <span className={styles.selo}>Líder</span>}
      <div className={styles.avatar}>{iniciais}</div>

      <h2>{nome}</h2>
      <p className={styles.papel}>{papel}</p>

      <ul className={styles.habilidades}>
        {habilidades.map((h) => (
          // importante: SEMPRE usar uma key única para cada item da lista
          <li key={h}>{h}</li>
        ))}
      </ul>
    </article>
  );
}

export default MembroCard;
