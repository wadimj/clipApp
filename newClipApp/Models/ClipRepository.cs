using System;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;

namespace newClipApp.Models
{
    public class ClipRepository : IClipRepository
    {
        protected AppContext RepositoryContext { get; set; }
 
        public ClipRepository(AppContext repositoryContext)
        {
            this.RepositoryContext = repositoryContext;
        }
 
        public IQueryable<Clip> FindAll()
        {
            return this.RepositoryContext.Set<Clip>().AsNoTracking();
        }
 
        public IQueryable<Clip> FindByCondition(Expression<Func<Clip, bool>> expression)
        {
            return this.RepositoryContext.Set<Clip>().Where(expression).AsNoTracking();
        }
 
        public void Create(Clip entity)
        {
            this.RepositoryContext.Set<Clip>().Add(entity);
        }
 
        public void Update(Clip entity)
        {
            this.RepositoryContext.Set<Clip>().Update(entity);
        }
 
        public void Delete(Clip entity)
        {
            this.RepositoryContext.Set<Clip>().Remove(entity);
        }

        public void Save()
        {
            this.RepositoryContext.SaveChanges();
        }
        private bool disposed = false;
        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    this.RepositoryContext.Dispose();
                }
            }
            this.disposed = true;
        }
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}