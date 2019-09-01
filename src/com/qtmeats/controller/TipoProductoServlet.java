package com.qtmeats.controller;


import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.persistence.criteria.CriteriaQuery;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.qtmeats.model.TipoProducto;

/**
 * Servlet implementation class TipoProductoServlet
 */
@WebServlet("/TipoProductoServlet")
@MultipartConfig
public class TipoProductoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	 
		protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			response.setContentType("text/html");
			PrintWriter salida = response.getWriter();
			
			TipoProducto miTipoProducto = new TipoProducto();
			String id = request.getParameter("txtId");
			miTipoProducto.setTipo(id);
			//System.out.println(id);
			
			Configuration cfg = new Configuration();				
			SessionFactory sesionFactory = cfg.configure().buildSessionFactory();
			Session sesion = sesionFactory.openSession();
			Transaction miTransaccion = sesion.beginTransaction();
			
			if(id != null) { //lectura individual
	
				// creamos el objeto configuration
				
				
				miTipoProducto = sesion.get(TipoProducto.class,Integer.parseInt(id));
				ObjectMapper miJackson = new ObjectMapper();
				String jsonJackson = miJackson.writeValueAsString(miTipoProducto);
				salida.append(jsonJackson);

				miTransaccion.commit();

				
				salida.close();
			} else { // lectura general
				//nueva forma
				CriteriaQuery<TipoProducto> cq = sesion.getCriteriaBuilder().createQuery(TipoProducto.class);
		   		cq.from(TipoProducto.class);
		   		ArrayList<TipoProducto> productos = (ArrayList<TipoProducto>) sesion.createQuery(cq).getResultList();
		   		
		   		Gson myJson = new Gson();
				salida.append(myJson.toJson(productos));
				
				miTransaccion.commit();
	
			}
			sesion.close();
			salida.close();
		}

		protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			//Create
			//response.setContentType("text/html");
			//response.getWriter().print("Crear Tipo Producto");
			//System.out.println("Crear Tipo Producto");
			
			
			response.setContentType("text/html");
			PrintWriter salida = response.getWriter();

			
			TipoProducto miTipoProducto = new TipoProducto();
			//miTipoProducto.setId(Integer.parseInt(request.getParameter("txtIdTipoProducto")));
			String tipo = request.getParameter("txtTipo");
			miTipoProducto.setTipo(tipo);
			
			//creamos el objeto configuration
			Configuration cfg = new Configuration();
			SessionFactory factory = cfg.configure().buildSessionFactory();
			Session sesion = factory.openSession();
			Transaction transac = sesion.beginTransaction();
			
			//Persistimos el objeto
			System.out.println(tipo +" "+ miTipoProducto.toString());
			sesion.save(miTipoProducto);
			transac.commit();
			
			salida.append("Creado con exito");
			sesion.close();
			salida.close();
		}

		protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			//Update
			response.setContentType("text/html");
			PrintWriter salida = response.getWriter();

			
			Configuration cfg = new Configuration();
			SessionFactory miFactory = cfg.configure().buildSessionFactory();
			
			Session miSesion = miFactory.openSession();
			Transaction miTransac = miSesion.beginTransaction();
			
			TipoProducto miTipoProducto = new TipoProducto();
			miTipoProducto.setId(Integer.parseInt(request.getParameter("txtId")));
			miTipoProducto.setTipo(request.getParameter("txtTipo"));
			miSesion.update(miTipoProducto);
			
			salida.append("Producto Actualizado");
			miTransac.commit();
			miSesion.close();
		}

		protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			response.setContentType("text/html charset='UTF-8' ");
			PrintWriter salida = response.getWriter();
			
			
			TipoProducto miTipoProducto = new TipoProducto();
			String id= request.getParameter("txtId");

			miTipoProducto.setId(Integer.parseInt(id));
			miTipoProducto.setTipo("");
			
			// creamos el objeto configuration
			Configuration cfg = new Configuration();

			SessionFactory sesionFactory = cfg.configure().buildSessionFactory();
			Session sesion = sesionFactory.openSession();
			Transaction miTransaccion = sesion.beginTransaction();
			
			sesion.delete(miTipoProducto);

			miTransaccion.commit();
			salida.append("Producto Borrado");
			sesion.close();
			salida.close();
		}


}
