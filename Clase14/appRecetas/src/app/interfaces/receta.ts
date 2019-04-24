export interface Receta {
	id?: string
	tituloEspanol?: string
	tituloIngles?: string
	sumillaEspanol?: string
	sumillaIngles?: string
	ingredientesEspanol?: string[]
	ingredientesIngles?: string[]
	instruccionesEspanol?: string[]
	instruccionesIngles?: string[]
	cantidadPersonas?: number
	imagenes?: any
	categorias?: any[]
	fechaPublicacion?: Date
	estado?: boolean
}
