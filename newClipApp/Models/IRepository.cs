using System;
using System.Linq;
using System.Linq.Expressions;

namespace newClipApp.Models{
    public interface IClipRepository
    {
        IQueryable<Clip> FindAll();
        IQueryable<Clip> FindByCondition(Expression<Func<Clip, bool>> expression);
        void Create(Clip entity);
        void Update(Clip entity);
        void Delete(Clip entity);
        void Save();
    }
}