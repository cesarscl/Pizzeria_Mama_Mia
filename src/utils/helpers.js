// Formatea un número como precio en pesos chilenos, con separador de miles.
// ej: formatPrice(25000) -> "25.000"
export const formatPrice = (price) => price.toLocaleString("es-CL")
