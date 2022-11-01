import { verify } from "jsonwebtoken";

interface Props {
  token: string;
}

export const verifyToken = ({ token }: Props) =>
  verify(
    token,
    "7jIDUAvZ5siBcdU4U0ILQrdQwuYrc0dd3GFoj1eKodloiFACb2DAkLsZmRYbPQauNGJsIQ90V8sKaTbmbKT8A95cJlAhJ71oVPcBp6WP3i3Xe/tYt4Asz8mDuM9/VZg0tMK7B7acJuaGqNLDgRzugU73GuhcvK2XojBda8700E7Xw8hrLmUzBOQtRcnIj1wW9Ocv5//18yMYNrZVHzglIMecHLlZNgBd2xRSDwgZTWpT1ZMN1G9ZWRYQdSYQEAqIvMMrytoAuHbBazrNu4wb/M9FI1z6vxoL1wjSuKd2gJL1ImezaN4ZSJmqOItA3pMLU5Ao+aG1WUhCU9IypCF7fA=="
  );
