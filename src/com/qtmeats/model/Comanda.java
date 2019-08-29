package com.qtmeats.model;

public class Comanda {
	private int id;
	private Usuario usuario;
	private float total;

	public Comanda() {
	}

	public Comanda(int id, Usuario usuario, float total) {
		this.id = id;
		this.usuario = usuario;
		this.total = total;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public float getTotal() {
		return total;
	}

	public void setTotal(float total) {
		this.total = total;
	}

	@Override
	public String toString() {
		return "Comanda [id=" + id + ", usuario=" + usuario + ", total=" + total + "]";
	}

}
