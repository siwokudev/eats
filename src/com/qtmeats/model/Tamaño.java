package com.qtmeats.model;

public class Tama�o {
	private int id;
	private String tama�o;

	public Tama�o() {
	}

	public Tama�o(int id, String tama�o) {
		this.id = id;
		this.tama�o = tama�o;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTama�o() {
		return tama�o;
	}

	public void setTama�o(String tama�o) {
		this.tama�o = tama�o;
	}

	@Override
	public String toString() {
		return "Tama�o [id=" + id + ", tama�o=" + tama�o + "]";
	}

}
