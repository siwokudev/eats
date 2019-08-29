package com.qtmeats.model;

public class TipoProducto {
	private int id;
	private String tipo;

	public TipoProducto() {
	}

	public TipoProducto(int id, String tipo) {
		this.id = id;
		this.tipo = tipo;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	@Override
	public String toString() {
		return "tipoComida [id=" + id + ", tipo=" + tipo + "]";
	}

}
