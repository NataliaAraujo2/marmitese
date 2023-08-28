import React, { useState } from "react";
import styles from "./Register.module.css";
import Button from "../../components/Button/Button";
import { FaBuilding, FaPen, FaUser } from "react-icons/fa";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [displayEmail, setDisplayEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [natural, setNatural] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      displayEmail,
      password,
    };

    if (password !== confirmPassword) {
      setError("A senha e a confirmação precisam ser iguais!");
    }
  };

  return (
    <div className={styles.register}>
      <h1>CRIE SUA CONTA</h1>
      <h3>Preencha os dados abaixo para se cadastrar no site!</h3>

      <div className={styles.button}>
        <ul>
          <li>
            <Button
              action={() => setNatural(!natural)}
              className={styles.natural}
              Text="Pessoa Física"
              Icon={FaUser}
            />
          </li>
          <li>
            <Button
              className={styles.legal}
              action={() => setNatural(!natural)}
              Text="Pessoa Jurídica"
              Icon={FaBuilding}
            />
          </li>
        </ul>
      </div>
      {natural === true ? (
        <div className={styles.naturalform}>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Nome:</span>
              <input
                type="text"
                name="displayName"
                required
                placeholder="Nome de Usuário"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </label>
            <label>
              <span>Email:</span>
              <input
                type="email"
                name="displayEmail"
                required
                placeholder="Digite seu Email"
                value={displayEmail}
                onChange={(e) => setDisplayEmail(e.target.value)}
              />
            </label>
            <label>
              <span>Senha:</span>
              <input
                type="password"
                name="password"
                required
                placeholder="Insira sua Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label>
              <span>Confirmação de Senha:</span>
              <input
                type="password"
                name="confirmPassword"
                required
                placeholder="Confirme sua senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
            <div className={styles.button}>
              <ul>
                <li>
                  <Button action Text="Próximo" Icon={FaPen} />
                </li>
              </ul>
            </div>
          </form>
        </div>
      ) : (
        <div className={styles.legalform}>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Nome da Empresa:</span>
              <input
                type="text"
                name="displayName"
                required
                placeholder="Nome de Usuário"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </label>
            <label>
              <span>Email:</span>
              <input
                type="email"
                name="displayEmail"
                required
                placeholder="Digite seu Email"
                value={displayEmail}
                onChange={(e) => setDisplayEmail(e.target.value)}
              />
            </label>
            <label>
              <span>Senha:</span>
              <input
                type="password"
                name="password"
                required
                placeholder="Insira sua Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label>
              <span>Confirmação de Senha:</span>
              <input
                type="password"
                name="confirmPassword"
                required
                placeholder="Confirme sua senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
            <div className={styles.button}>
              <ul>
                <li>
                  <Button
                    className={styles.buttonc}
                    action
                    Text="Próximo"
                    Icon={FaPen}
                  />
                </li>
              </ul>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Register;
