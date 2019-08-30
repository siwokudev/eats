package com.qtmeats.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class TipoBebidaServlet
 */
@WebServlet("/TipoBebidaServlet")
public class TipoBebidaServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	 
		protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			//Read
			response.setContentType("text/html");
			response.getWriter().append("Leer Tipo Bebida");
		}

		protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			//Create
			response.setContentType("text/html");
			response.getWriter().print("Crear Tipo Bebida");
			System.out.println("Crear Tipo Bebida");
		}

		protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			//Update
			response.setContentType("text/html");
			response.getWriter().append("Actualizar Tipo Bebida");
		}

		protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			//Delete
			response.setContentType("text/html");
			response.getWriter().append("Borrar Tipo Bebida");
		}


}
