using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MedPrestige.Domain.Entities
{
    [Table("reviews")]
    public class Review
    {
        [Key]
        [Column("review_id")]
        public int ReviewId { get; set; }

        [Column("user_id")]
        public int? UserId { get; set; }

        [Column("doctor_id")]
        public int? DoctorId { get; set; }

        [Column("rating")]
        public int Rating { get; set; }

        [Column("comment")]
        public string Comment { get; set; }

        [Column("created_at")]
        public DateTime CreatedAt { get; set; }

        [ForeignKey("UserId")]
        public virtual User User { get; set; }

        [ForeignKey("DoctorId")]
        public virtual Doctor Doctor { get; set; }
    }
}
