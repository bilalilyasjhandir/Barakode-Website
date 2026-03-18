import React from "react";


export default function FeatureCard({ title, content, img, icon: Icon }) {
  return (
    <div className="card w-full bg-white card-lg">
      <div className="card-body ps-0">
        {Icon ? (
          <Icon className="h-16 w-16 mb-5 text-amber-600" />
        ) : img ? (
          <img src={img} loading="lazy" className="h-16 w-16 mb-5" alt="Singularity Inc – AI and software development company" />
        ) : (
          <div className="h-16 w-16 mb-5 bg-amber-200 rounded-lg flex items-center justify-center">
            <span className="text-amber-600 text-sm font-bold">ICON</span>
          </div>
        )}
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}
